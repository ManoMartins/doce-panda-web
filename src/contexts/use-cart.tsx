import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { ListProductResponse } from '@features/product/queries/use-list-products'

interface CartProduct {
  product: ListProductResponse
  quantity: number
}

interface CartContextValues {
  amount: number
  totalPrice: number
  subTotalPrice: number
  deliveryPrice: number
  clearCart: () => void
  cartProducts: CartProduct[]
  addProduct: (product: ListProductResponse, quantity: number) => void
  removeProduct: (productId: string, quantity: number) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const CartContext = createContext<CartContextValues>({} as CartContextValues)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])

  const amount = useMemo(() => {
    return cartProducts.reduce((acc, cur) => acc + cur.quantity, 0)
  }, [cartProducts])

  const subTotalPrice = useMemo(() => {
    return cartProducts.reduce(
      (acc, cur) => acc + cur.product.price * cur.quantity,
      0
    )
  }, [cartProducts])

  const addProduct = useCallback(
    (product: ListProductResponse, quantity: number) => {
      const draft = [...cartProducts]
      const productIndex = draft.findIndex((c) => c.product.id === product.id)

      if (productIndex === -1) {
        draft.push({ product, quantity })
      } else {
        draft[productIndex].quantity += quantity
      }

      setCartProducts(draft)
    },
    [cartProducts]
  )

  const removeProduct = useCallback(
    (productId: string, quantity: number) => {
      let draft = [...cartProducts]
      const productIndex = draft.findIndex((c) => c.product.id === productId)

      if (productIndex === -1) {
        throw new Error('Produto não foi encontrado')
      }

      draft[productIndex].quantity -= quantity

      if (draft[productIndex].quantity <= 0) {
        draft = draft.slice(productIndex, 0)
      }

      setCartProducts(draft)
    },
    [cartProducts]
  )

  const clearCart = useCallback(() => {
    setCartProducts([])
  }, [])

  return (
    <CartContext.Provider
      value={{
        amount,
        subTotalPrice,
        addProduct,
        cartProducts,
        removeProduct,
        clearCart,
        deliveryPrice: 5,
        totalPrice: subTotalPrice + 5,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
