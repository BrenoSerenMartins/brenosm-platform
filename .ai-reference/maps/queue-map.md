# Queue Map: brenosm-platform

## Current State
There are no queues in the repository.

## What Is Not Present
- No Redis queue setup.
- No RabbitMQ workers.
- No BullMQ or similar job scheduler.
- No background processors.
- No deferred email or synchronization pipeline.

## Why This Matters
- The code mentions queue-related experience in the résumé, but that is narrative context, not an implementation detail.
- If background work is introduced later, it should be documented as a first-class subsystem rather than hidden inside route files.

## Future Queue Candidates
- Contact form submission.
- CMS sync jobs.
- Analytics batching.
- Asset processing or import jobs.
