import { RouterApp } from "./router/RouterApp"
import { AuthProvider } from "./auth/context"

export const HeoresApp = () => {
  return (
    <AuthProvider>
      <RouterApp />
    </AuthProvider>
  )
}
