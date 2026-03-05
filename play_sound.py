import subprocess
import sys
from pathlib import Path


def play_sound(wav_path: Path) -> None:
    if not wav_path.exists():
        print(f"Sound file not found: {wav_path}", file=sys.stderr)
        return

    if sys.platform == "linux":
        # WSL: use PowerShell to play audio through Windows
        if Path("/proc/sys/fs/binfmt_misc/WSLInterop").exists():
            win_path = subprocess.check_output(["wslpath", "-w", str(wav_path)]).decode().strip()
            subprocess.run(
                ["powershell.exe", "-c", f'(New-Object Media.SoundPlayer "{win_path}").PlaySync()'],
                check=True,
            )
        else:
            subprocess.run(["aplay", str(wav_path)], check=True)
    elif sys.platform == "darwin":
        subprocess.run(["afplay", str(wav_path)], check=True)
    elif sys.platform == "win32":
        import winsound
        winsound.PlaySound(str(wav_path), winsound.SND_FILENAME)


if __name__ == "__main__":
    sound_file = Path(__file__).parent / "ulala.wav"
    play_sound(sound_file)
