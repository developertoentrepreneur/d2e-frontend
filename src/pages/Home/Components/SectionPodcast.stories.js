import SectionPodcast from './SectionPodcast.vue';

export default {
    title: 'Pages/Home/Components/SectionPodcast',
    component: SectionPodcast
};

const Template = () => ({
    // Components used in your story `template` are defined in the `components` object
    components: { SectionPodcast },
    // The story's `args` need to be mapped into the template through the `setup()` method

    // Then, those values can be accessed directly in the template
    template: '<SectionPodcast/>'
});

export const Default = Template.bind({});
