# Kea Extensions
This directory contains all extensions which has been approved and added into Kea. As well, we have an example extension for new developers to make their thing! 

Look into [exampleExtension/README.md](exampleExtension/README.md) for information on example extension and how it works, so you can customize for your needs!

## Writing an Extension
Before making your extension:
- Think if your idea/extension would be useful for most people.
- Check existing pull requests to see if someone already working on a similar idea/extension.
- Please read extension rules to understand what you can't do or make.

### Extension Rules
- No simple slash commands extensions. (e.g. `/test` returns simple text)
- No simple text replace extensions. (e.g. "hi" -> "hey" or something like that)
- No raw DOM manipulation, use patches and React.
- No selfbots or extensions that abuse Discord's API.
- Do not add new dependencies to Kea itself unless absolutely necessary.

### Code Guidelines
- Keep it self-contained by placing all files specific to your extension inside its own folder.
- Always clean up event listeners, intervals, and subscriptions inside the `stop()` method.
- Use path aliases instead of relative paths. Import extension types using `@extensions/types`.
- Write regex patterns that target stable code strings rather than minified variable names that change with every Discord update.
