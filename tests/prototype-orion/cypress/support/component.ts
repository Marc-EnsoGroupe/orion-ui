import { mount } from 'cypress/vue';
import SharedSetupService from 'packages/Shared/SharedSetupService';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', mount);

Cypress.Commands.add('mount', (component, ...args) => {
	const options = args[0] || {};
	cy.log('options', options.global?.provide?._user);
	const userPlugins = (options.global && options.global.plugins) || [];
	cy.log('🚨Mounting ...');

	if (!options.global) {
		options.global = {};
	}
	if (!options.global.components) {
		options.global.components = {};
	}

	options.global.components['SharedSetupService'] = SharedSetupService;
	return mount(component, {
		...options,
		global: {
			...(options.global || {}),
			plugins: [...userPlugins],
		},
	});
});
