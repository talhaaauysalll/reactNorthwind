import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignOut({singIn}) {
    return (
        <div>
            <Menu.Item>
            <Button onClick={singIn} primary>Giriş Yap</Button>
            <Button primary style={{marginLeft:'0.5em'}}>Kayıt Ol</Button>
            </Menu.Item>
        </div>
    )
}
