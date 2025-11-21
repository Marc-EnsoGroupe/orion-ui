import OrionAlert from 'packages/Alert/src/OrionAlert.vue';
import 'packages/Alert/src/OrionAlert.less'; // Importez le style pour le rendu

describe('<OrionAlert />', () => {

  it('affiche le contenu passé dans le slot par défaut', () => {
    cy.mount(OrionAlert, {
      slots: {
        default: 'Mon message d\'alerte personnalisé',
      },
    });

    cy.contains('Mon message d\'alerte personnalisé').should('be.visible');
  });

  it('affiche un titre quand la prop "title" est fournie', () => {
    cy.mount(OrionAlert, {
      props: {
        title: 'Information importante',
      },
    });

    cy.get('h5.orion-alert__title').should('contain.text', 'Information importante');
  });

  it('émet un événement "close" quand on clique sur le bouton de fermeture', () => {
    const onCloseSpy = cy.spy().as('onCloseSpy');

    cy.mount(OrionAlert, {
      props: {
        close: true,
        onClose: onCloseSpy,
      },
    });

    cy.get('.orion-alert__close').click();

    cy.get('@onCloseSpy').should('have.been.calledOnce');
  });

  it('applique la bonne classe de couleur en fonction de la prop "color"', () => {
    cy.mount(OrionAlert, {
      props: {
        color: 'danger',
      },
    });

    cy.get('.orion-alert').should('have.class', 'orion-alert--danger');
  });

  it('ne doit pas afficher le bouton de fermeture si la prop "close" est absente', () => {
    cy.mount(OrionAlert, {
      slots: {
        default: 'Alerte non fermable',
      },
    });

    cy.get('.orion-alert__close').should('not.exist');
  });
});