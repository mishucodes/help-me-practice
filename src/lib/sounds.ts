import correctOptionSound from "#/assets/sounds/correctOptionSound.mp3";
import incorrectOptionSound from "#/assets/sounds/incorrectOptionSound.mp3";
import skipOptionSound from "#/assets/sounds/skipOptionSound.mp3";

const soundNames = ["correct", "incorrect", "skip"] as const;
export type SoundName = (typeof soundNames)[number];

const soundUrls: Record<SoundName, string> =
{
    correct: correctOptionSound,
    incorrect: incorrectOptionSound,
    skip: skipOptionSound
};

let context: AudioContext | null = null;
const decodedBuffers = new Map<SoundName, Promise<AudioBuffer>>();

function getContext(): AudioContext
{
    if(context === null) context = new AudioContext();
    return context;
}

function loadBuffer(name: SoundName): Promise<AudioBuffer>
{
    const cached = decodedBuffers.get(name);
    if(cached !== undefined) return cached;

    const loading = fetch(soundUrls[name])
        .then((response) => response.arrayBuffer())
        .then((encoded) => getContext().decodeAudioData(encoded))
        .catch((error: unknown) =>
        {
            decodedBuffers.delete(name);
            throw error;
        });

    decodedBuffers.set(name, loading);
    return loading;
}

export async function preloadSounds(): Promise<void>
{
    await Promise.all(soundNames.map(loadBuffer));
}

export async function playSound(name: SoundName): Promise<void>
{
    const ctx = getContext();
    if(ctx.state === "suspended") await ctx.resume();

    const source = ctx.createBufferSource();
    source.buffer = await loadBuffer(name);
    source.connect(ctx.destination);
    source.start();
}

// export const playCorrectSound = () => playSound("correct");
// export const playIncorrectSound = () => playSound("incorrect");
// export const playSkipSound = () => playSound("skip");