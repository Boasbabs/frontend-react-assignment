import { PropsWithChildren, ReactElement } from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import ticketsReducer from "../store/ticketsSlice"

type CustomRenderOptions = {
  initialState?: RootState;
  store?: EnhancedStore<RootState>;
  route?: string;
} & RenderOptions;

const render = (
  ui: ReactElement,
  {
    initialState,
    store = configureStore({ reducer: { ticketsReducer } }),
    route = "/",
    ...renderOptions
  }: CustomRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => (
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
    </Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };

