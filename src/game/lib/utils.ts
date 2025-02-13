import { getSession } from "@/lib/session";

// load Avatar from Session
export async function loadAvatar(scene: Phaser.Scene) {
  const sessionData = await getSession();

  // scene.load.svg('avatar', sessionData?.user?.tg_photo_url)
  scene.load.image('avatar', 'stub/avatar.jpg')
}

export async function setAvatar(scene: Phaser.Scene) {
  // setAvatar
  const avatar = scene.make.image({
    x: 100,
    y: 300,
    key: 'avatar',
    scale: {
      x: 0.4,
      y: 0.4
    },
  });
  avatar.preFX?.addCircle(0, 0xfeedb6, 0xff0000, 1)

  // setUsername
  scene.add.text(200, 260, 'awbait', {
    fontSize: '64px',
    fontFamily: 'Arial',
    fontStyle: 'bold',
    color: '#ffffff',
  });
}