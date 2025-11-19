/// <reference lib="webworker" />

import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

declare const __WB_MANIFEST: Array<import('workbox-build').ManifestEntry>;

precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

registerRoute(
  ({ request }) => request.destination === 'document',
  new NetworkFirst({ cacheName: 'pages' })
);

registerRoute(
  ({ url }) => url.pathname.startsWith('/api/portfolio'),
  new StaleWhileRevalidate({ cacheName: 'portfolio-api' })
);

export {};
