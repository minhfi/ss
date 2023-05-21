import { FC } from 'react'

export const InternalServerError: FC = () => {
  return (
    <section className="mod-error-500">
      <h1 className="error-title">
        Oops!
        <br/>
        Something went wrong :(
      </h1>
      <h2 className="error-subtitle">
        Have you tried turning it off and on again?
      </h2>
    </section>
  )
}
