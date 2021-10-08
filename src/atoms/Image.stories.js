import Image from './Image.vue';

export default {
    title: 'Atoms/Image',
    component: Image,
    argTypes: {
        location: {
            control: { type: 'select', options: ['homepage/community', 'homepage/podcast', 'homepage/tutorial'] }
        }
    }
};

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Image },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<Image v-bind="args" />'
});

export const Default = Template.bind({});
