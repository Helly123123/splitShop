<script setup>
    import {onMounted,  ref, reactive, watch, provide, computed, inject }from 'vue'
    const {orderCard} = inject('orderCard')
    import CardDrawer from './drawerOrderCard.vue'
    const emit = defineEmits(['removeDrawer', 'addLiked', 'removeLiked'])
  
  </script>
  
  <template>
      <CardDrawer
      v-for="item in orderCard"
              :key="item.id"
              :id="item.id"
              :image="item.image"
              :title="item.title" 
              :model="item.model" 
              :square="item.square" 
              :price="item.price"
              :isAdded="item.isAdded"
              :onClickAddRemoveDrawerOrder="() => emit('removeDrawer', item)"
              :onClickAddPlus="() => emit('addLiked', item)"
              :onClickAddRemove="() => emit('removeLiked', item)"
            />
  </template>
  
  <script>
  
  </script>
  
  <style>
  
  </style>