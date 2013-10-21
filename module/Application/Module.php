<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2013 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application;

use Zend\Mvc\ModuleRouteListener;
use Zend\Mvc\MvcEvent;
use Zend\I18n\Translator\Translator;
use Locale;

class Module
{
    public function onBootstrap(MvcEvent $e)
    {
        $availableLanguages = array ('de', 'en', 'de_DE', 'en_US');
        $defaultLanguage = 'de_DE';
        $language = "";
        $eventManager        = $e->getApplication()->getEventManager();
        $moduleRouteListener = new ModuleRouteListener();
        $moduleRouteListener->attach($eventManager);
        $translator = $e->getApplication()->getServiceManager()->get('translator');
        $headers = $e->getApplication()->getRequest()->getHeaders();
        if (isset($_REQUEST['lang'])) {
            $language = $this->getLanguageCode($_REQUEST['lang']);
        } elseif ($headers->has('Accept-Language')) {
            $headerLocale = $headers->get('Accept-Language')->getPrioritized();
            $languages = preg_split('/-/',$headerLocale[0]->getLanguage() );
            $language = $this->getLanguageCode($languages[0]);
        }

        if(!in_array($language, $availableLanguages)) {
            $language = $defaultLanguage;
        }
        $translator->setLocale($language);
    }

    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';
    }

    public function getAutoloaderConfig()
    {
        return array(
            'Zend\Loader\StandardAutoloader' => array(
                'namespaces' => array(
                    __NAMESPACE__ => __DIR__ . '/src/' . __NAMESPACE__,
                ),
            ),
        );
    }

    private function getLanguageCode($language)
    {
        $defaultLanguage = "de_DE";
        switch ($language) {
            case 'en':
                $defaultLanguage = "en_US";
                break;
            default:
                break;
        }
        return $defaultLanguage;
    }
}
