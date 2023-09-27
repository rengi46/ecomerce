import React from 'react'
import CardCategory from './components/CardCategory';

const Categories = (query) => {
  const categories = query.categories.items;
  return (
    <div>

<div class="flex flex-col">
  <h2 class="mb-4 text-2xl font-bold text-center">Categories</h2>

  <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {categories.map((category) => (
      <CardCategory
        name={category.name}
        url={category.url}
        image={category?.image?.url}
      />
    ))}
  </div>
</div>
    </div>
  )
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
}

export const query = `
  query {
    categories{

        items{
          name
          url
          image{
            path
            url
          }
        }
  
    }
  }
`;


export default Categories