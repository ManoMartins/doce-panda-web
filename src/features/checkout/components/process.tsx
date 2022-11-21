import { useCallback } from 'react'
import { useNavigate } from 'react-router'
import { PageLayout } from '@primer/react'

import { CheckoutCoupon } from '@features/checkout/components/checkout-coupon'
import { CheckoutDetails } from '@features/checkout/components/checkout-details'
import { CheckoutProducts } from '@features/checkout/components/checkout-products'
import { CheckoutPaymentMethod } from '@features/checkout/components/checkout-payment-method'
import { CheckoutDeliveryAddress } from '@features/checkout/components/checkout-delivery-address'
import { useOrder } from '@features/checkout/contexts/use-order'
import { useError } from '@hooks/use-error'

export function Process() {
  const { makeOrder, isPaying } = useOrder()
  const navigate = useNavigate()
  const { handleError } = useError()

  const onSubmit = useCallback(async () => {
    try {
      await makeOrder()
      navigate('/thanks')
    } catch (err) {
      alert(handleError(err).errorMessage)
    }
  }, [handleError, makeOrder, navigate])

  return (
    <PageLayout containerWidth="large">
      <PageLayout.Content>
        <CheckoutDeliveryAddress />

        <CheckoutPaymentMethod />

        <CheckoutCoupon />

        <CheckoutProducts />
      </PageLayout.Content>

      <PageLayout.Pane>
        <CheckoutDetails onSubmit={onSubmit} isLoading={isPaying} />
      </PageLayout.Pane>
    </PageLayout>
  )
}
