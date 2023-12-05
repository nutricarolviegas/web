import "./style.scss"

import SwipeSlideButtons from "@/components/atoms/SwipeSlideButton/component"
import Recipe from "@/components/molecules/Recipe/component"
import { recipes } from "@/components/molecules/Recipe/recipes_base"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

const RecipesSwiper = () => {
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={false}
      slidesPerGroupSkip={1}
      grabCursor={true}
      breakpoints={{
        769: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      className='section-swiper'
    >
      <SwipeSlideButtons />
      {
        recipes.map(recipe => {
          return (
            <SwiperSlide key={recipe.title}>
              <Recipe
                title={recipe.title}
                cookDuration={recipe.cookDuration / 60}
                imgUrl={recipe.imgUrl}
                peopleServed={recipe.peopleServed}
              />
            </SwiperSlide>
          )
        })
      }
      {
        recipes.map(recipe => {
          return (
            <SwiperSlide key={recipe.title}>
              <Recipe
                title={recipe.title}
                cookDuration={recipe.cookDuration / 60}
                imgUrl={recipe.imgUrl}
                peopleServed={recipe.peopleServed}
              />
            </SwiperSlide>
          )
        })
      }
      {
        recipes.map(recipe => {
          return (
            <SwiperSlide key={recipe.title}>
              <Recipe
                title={recipe.title}
                cookDuration={recipe.cookDuration / 60}
                imgUrl={recipe.imgUrl}
                peopleServed={recipe.peopleServed}
              />
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default RecipesSwiper