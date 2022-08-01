import { proxy, useSnapshot, subscribe } from "valtio";

interface IAppState {
  lat: number;
  lng: number;
}

export const appState: IAppState = proxy({
  lat: 59.939099,
  lng: 30.315877,
});

export { useSnapshot, subscribe };
