import store from './index'
import { RootStateProps } from '@/types/store'
import { GetterTree } from 'vuex'

const Getters: GetterTree<RootStateProps, RootStateProps> = {
  locale: () => store.state.AppModule.locale,
  asideBarCollapseState: () => store.state.AppModule.asideCollapse,
  componentCacheList: () => store.state.AppModule.componentCacheList
}

export default Getters
