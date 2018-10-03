<?php
/**
 * Created by PhpStorm.
 * User: Alister
 * Date: 03/10/2018
 * Time: 12:06
 */

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/station")
 * @Route("/")
 */
class InitialNameForStation extends AbstractController
{
    public function __invoke()
    {
        return $this->render('index.html.twig', []);
    }
}
