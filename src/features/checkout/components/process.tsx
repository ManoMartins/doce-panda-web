import { useCallback } from 'react'
import { useNavigate } from 'react-router'
import { PageLayout } from '@primer/react'

import { CheckoutCoupon } from '@features/checkout/components/checkout-coupon'
import { CheckoutDetails } from '@features/checkout/components/checkout-details'
import { CheckoutProducts } from '@features/checkout/components/checkout-products'
import { CheckoutPaymentMethod } from '@features/checkout/components/checkout-payment-method'
import { CheckoutDeliveryAddress } from '@features/checkout/components/checkout-delivery-address'

export function Process() {
  const navigate = useNavigate()

  const handleChange = useCallback((selected: string | null) => {
    console.log(selected)
  }, [])

  const onSubmit = useCallback(() => {
    navigate('/thanks')
  }, [])

  return (
    <PageLayout containerWidth="large">
      <PageLayout.Content>
        <CheckoutDeliveryAddress handleChange={handleChange} />

        <CheckoutPaymentMethod />

        <CheckoutCoupon />

        <CheckoutProducts />
      </PageLayout.Content>

      <PageLayout.Pane>
        <CheckoutDetails onSubmit={onSubmit} />
      </PageLayout.Pane>
    </PageLayout>
  )
}
