import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Main } from "./styles";
import { StatusBar } from "expo-status-bar";
import Header from "./Header";
import { colorStatusBar } from "../UI/variaveis";

export default function Layout({ children }) {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colorStatusBar} style="auto" />
      <Header />
      <Main>{children}</Main>
    </SafeAreaView>
  );
}
