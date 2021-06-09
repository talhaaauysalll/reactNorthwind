import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn(signOut) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://png.pngtree.com/png-vector/20191104/ourmid/pngtree-businessman-avatar-cartoon-style-png-image_1953664.jpg"
        />
      </Menu.Item>
      <Dropdown pointing="top left" text="Talha">
        <Dropdown.Menu>
          <Dropdown.Item text="Bilgilerim" icon="info" />
          <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
