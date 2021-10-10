import SectionCommunity from './SectionCommunity.vue';

export default {
    title: 'Pages/Home/Components/SectionCommunity',
    component: SectionCommunity
};

const Template = () => ({
    // Components used in your story `template` are defined in the `components` object
    components: { SectionCommunity },
    // The story's `args` need to be mapped into the template through the `setup()` method

    // Then, those values can be accessed directly in the template
    template: '<SectionCommunity/>'
});

export const Default = Template.bind({});
