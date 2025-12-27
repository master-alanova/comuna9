/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { User } from './lib/auth';

// Al usar 'import', necesitamos 'declare global' para que Astro lo vea
declare global {
    namespace App {
        interface Locals {
            user?: User;
        }
    }
}