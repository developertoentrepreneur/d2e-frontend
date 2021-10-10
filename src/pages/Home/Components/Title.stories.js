import Title from './Title.vue';

export default {
    title: 'Pages/Home/Components/Title',
    component: Title
};

const Template = () => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Title },
    // The story's `args` need to be mapped into the template through the `setup()` method

    // Then, those values can be accessed directly in the template
    template: '<Title/>'
});

export const Default = Template.bind({});
