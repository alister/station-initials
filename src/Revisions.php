<?php

namespace App;

/**
 * Collect the Git Sha revision ID from the Capistrano-created REVISION file
 * in the site base.
 */
class Revisions
{
    public const CONTENTS_UNKNOWN  = 'unknown';
    public const FILETIME_UNKNOWN  = 0;
    public const REVISION_FILENAME = '/REVISION';

    /**
     * This is not the length of the contents, it's the max number we will read
     */
    private const READ_LENGTH = 32;

    /** @var string a `realpath($filepath)`, or stream URL */
    private $revisionFile;

    public function __construct(string $projectDir)
    {
        $this->setRevisionPath(realpath($projectDir.self::REVISION_FILENAME));
    }

    /**
     * A file or stream URL,
     *
     * @var string a `realpath($filepath)`, or stream URL
     */
    public function setRevisionPath(string $filepath): void
    {
        $this->revisionFile = $filepath;
    }

    public function getRevisionFileTime(): int
    {
        if (file_exists($this->revisionFile)) {
            return filemtime($this->revisionFile);
        }

        return self::FILETIME_UNKNOWN;
    }

    public function getCurrent(): string
    {
        if (file_exists($this->revisionFile)) {
            return trim(file_get_contents($this->revisionFile, false, null, 0, self::READ_LENGTH));
        }

        return self::CONTENTS_UNKNOWN;
    }
}
