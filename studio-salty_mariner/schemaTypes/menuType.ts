import { defineField, defineType } from 'sanity';

export const menuType = defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'retter',
      title: 'Dishes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'navn',
              title: 'Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'beskrivelse',
              title: 'Description',
              type: 'string',
            }),
            defineField({
              name: 'pris',
              title: 'Price',
              type: 'number',
              validation: (rule) => rule.required().min(0),
            }),
            defineField({
              name: 'allergener',
              title: 'Allergens',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'bilde',
              title: 'Image',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
});
