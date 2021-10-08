import SectionTutorials from './SectionTutorials.vue';

export default {
    title: 'Pages/Home/SectionTutorials',
    component: SectionTutorials
};

const Template = () => ({
    // Components used in your story `template` are defined in the `components` object
    components: { SectionTutorials },
    // The story's `args` need to be mapped into the template through the `setup()` method

    // Then, those values can be accessed directly in the template
    template: '<SectionTutorials/>'
});

export const Default = Template.bind({});
