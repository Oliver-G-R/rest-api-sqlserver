import app from './server'
import './db'

app.listen(app.get('PORT'), () => {
    console.log('Server on port', app.get('PORT'))
})