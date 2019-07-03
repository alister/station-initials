<?php
declare(strict_types=1);

namespace App\Controller;

use App\Revisions;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/station")
 * @Route("/")
 */
class InitialNameForStation extends AbstractController
{
    public function __invoke(Revisions $revisions)
    {
        return $this->render('index.html.twig', [
            'revision_time' => $revisions->getRevisionFileTime(),
            'revision_sha' => $revisions->getCurrent(),
        ]);
    }
}
