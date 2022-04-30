import type { PluginContext } from '@rcv-prod-toolkit/types'

module.exports = async (ctx: PluginContext) => {
  const namespace = ctx.plugin.module.getName();
  // Register new UI page
  ctx.LPTE.emit({
    meta: {
      type: 'add-pages',
      namespace: 'ui',
      version: 1
    },
    pages: [{
      name: 'LoL: Lobby',
      frontend: 'frontend',
      id: `op-${namespace}`
    }]
  });

  
  ctx.LPTE.on(namespace, 'request', e => {
    // TODO
  });

  // Emit event that we're ready to operate
  ctx.LPTE.emit({
    meta: {
      type: 'plugin-status-change',
      namespace: 'lpt',
      version: 1
    },
    status: 'RUNNING'
  });
};
