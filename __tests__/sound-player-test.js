import SoundPlayer from '../src/sound-player';
import SoundPlayerConsumer from '../src/sound-player-consumer';

jest.mock('../src/sound-player'); // soundPlayer 现在是一个模拟构造函数

beforeEach(()=>{
    // 清除所有实例并调用构造函数和所有方法
    SoundPlayer.mockClear()
})

it('We can check if the consumer called the class constructor',()=>{
    const soundPlayerConsumer = new SoundPlayerConsumer()
    expect(SoundPlayer).toHaveBeenCalledTimes(1)
})

it('We can check if the consumer called a method on the class instance',()=>{
    // Show that mockClear() is working.
    expect(SoundPlayer).not.toHaveBeenCalled()
    
    const soundPlayerConsumer = new SoundPlayerConsumer()
    // Constructor should have been called again.
    expect(SoundPlayer).toBeCalledTimes(1)

    const coolSoundFileName = 'song.mp3'
    soundPlayerConsumer.playSomethingCool()

     // mock.instances is available with automatic mocks:
    const mockSoundPlayerInstance = SoundPlayer.mock.instances[0];
    const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;
    expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
})