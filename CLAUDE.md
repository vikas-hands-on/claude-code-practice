# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Python 3.12 utility project managed with `uv`. Currently contains a cross-platform WAV audio player (`play_sound.py`) that handles WSL, Linux, macOS, and Windows environments.

## Commands

```bash
uv run python play_sound.py   # Play ulala.wav
uv add <package>              # Add a dependency
uv sync                       # Install dependencies from uv.lock
```

## Architecture

- **Package manager:** `uv` (see `pyproject.toml` and `uv.lock`)
- **`play_sound.py`:** Detects the platform at runtime and delegates to the appropriate audio backend — PowerShell `Media.SoundPlayer` on WSL, `aplay` on native Linux, `afplay` on macOS, and `winsound` on Windows. The script resolves `ulala.wav` relative to its own `__file__` path.
- **No test framework** is currently configured.

## Notes

- The `.gitignore` includes Next.js/Node artifacts, anticipating a potential web app addition to this repo.
