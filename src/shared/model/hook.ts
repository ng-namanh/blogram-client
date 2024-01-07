import { AppDispatch, RootState } from '@/app/appStore'
import {
  useSelector,
  type TypedUseSelectorHook,
  useDispatch
} from 'react-redux'

export const useAppDispatch = useDispatch<AppDispatch>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
