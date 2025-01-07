import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(shop)"
        options={{ headerShown: false, title: "Shopping Native" }}
      />
      <Stack.Screen
        name="categories"
        options={{ headerShown: false, title: "Categorias" }}
      />
      <Stack.Screen
        name="product"
        options={{ headerShown: true, title: "Produtos" }}
      />
      <Stack.Screen
        name="cart"
        options={{ presentation: "modal", title: "Carrinho Compras" }}
      />
      <Stack.Screen name="auth" options={{ headerShown: true }} />
    </Stack>
  );
}
