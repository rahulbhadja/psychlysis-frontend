import ToSurvey from '../components/home/toSurvey'
import { store } from '../store/store'
import { Provider } from 'react-redux'

export default function Index() {
  return (
    <Provider store={store}>
      <section>
        <ToSurvey linkButton={'/survey'} />
      </section>
    </Provider>
  )
}
