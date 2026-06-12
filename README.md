# Locus Plugin Template

Template repository for publishing Locus plugins with registry-ready GitHub Release assets.

## Use This Template

1. Create a new repository from this template.
2. Edit `locus.plugin.json`:
   - `id`
   - `name`
   - `version`
   - component ids and paths if you rename folders
3. Edit `README.md`, `LICENSE`, and `registry/plugin-entry.template.json`.
4. Push to `main`.

On every push to `main`, `.github/workflows/release.yml` reads `locus.plugin.json`. If tag `v<version>` does not exist yet, it creates:

- Git tag: `v<version>`
- GitHub Release: `<plugin-id> <version>`
- Asset: `<plugin-id>-<version>.zip`

The zip is built from the repository root and contains `locus.plugin.json` at the archive root, which is required by the Locus plugin registry validator.

## Manual Release

You can also run the release workflow manually from GitHub Actions. It uses the current `locus.plugin.json` version.

## Registry Entry

Use `registry/plugin-entry.template.json` as the starting point for a PR to `r1n7aro/locus-plugin-registry`.

Set:

- `author`
- `repo`
- `summary`
- `description`
- `tags`
- `downloadSource.repo`
- `downloadSource.assetPattern`

The default asset pattern is:

```text
<plugin-id>-*.zip
```

## Local Validation

Build the same zip locally:

```bash
python scripts/package_plugin.py
```

Validate only:

```bash
python scripts/validate_plugin.py
```
