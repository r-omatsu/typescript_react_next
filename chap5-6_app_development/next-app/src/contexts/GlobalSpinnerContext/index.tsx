import React, { createContext, useContext, useState } from 'react'

const GlobalSpinnerContext = createContext<boolean>(false)
const GlobalSpinnerActionsContext = createContext<
  React.Dispatch<React.SetStateAction<boolean>>
  // eslint-disable-next-line @typescript-eslint/no-empty-function
>(() => {})

// グローバルスピナーの表示・非表示
export const useGlobalSpinnerContext = (): boolean =>
  useContext<boolean>(GlobalSpinnerContext)

// グローバルスピナーの表示・非表示のアクション
// useStateの更新関数はReact.Dispatch<React.SetStateAction<変化させる状態>>で示せる
export const useGlobalSpinnerActionsContext = (): React.Dispatch<
  React.SetStateAction<boolean>
> =>
  useContext<React.Dispatch<React.SetStateAction<boolean>>>(
    GlobalSpinnerActionsContext,
  )

interface GlobalSpinnerContextProviderProps {
  children?: React.ReactNode
}

/**
 * グローバルスピナーコンテキストプロバイダー
 */
const GlobalSpinnerContextProvider = ({
  children,
}: GlobalSpinnerContextProviderProps) => {
  const [isGlobalSpinnerOn, setGlobalSpinner] = useState(false)

  return (
    <GlobalSpinnerContext.Provider value={isGlobalSpinnerOn}>
      <GlobalSpinnerActionsContext.Provider value={setGlobalSpinner}>
        {children}
      </GlobalSpinnerActionsContext.Provider>
    </GlobalSpinnerContext.Provider>
  )
}

export default GlobalSpinnerContextProvider
