<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2013 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

class IndexController extends AbstractActionController
{
    public function indexAction()
    {
        return new ViewModel();
    }
    public function profileAction()
    {
        return new ViewModel();
    }
    public function contactAction()
    {
        return new ViewModel();
    }

    public function projectsAction()
    {
        return new ViewModel();
    }

    public function applicationAction()
    {
        $result = new ViewModel();
        //$result->setTerminal(true);

        return $result;
    }
}
