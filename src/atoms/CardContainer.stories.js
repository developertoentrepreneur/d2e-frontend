import CardContainer from './CardContainer';

export default {
    title: 'Atoms/CardContainer',
    component: CardContainer
};

export const Default = () => ({
    components: { CardContainer },
    template: `
  <CardContainer>
  </CardContainer>`
});
