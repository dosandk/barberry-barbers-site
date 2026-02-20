# AGENTS.md

## Code Generation Guidelines for AI Agents

This document provides essential guidelines for AI agents generating code in this project.
Follow these rules strictly to ensure consistency and correct usage of the ELEKS UI component library.

## Component Library: ELEKS UI

This project uses **ELEKS UI**, a custom component library based on Material-UI.
All UI components must be sourced from this library.
All icons must be imported from '@mui/icons-material'. For example:

```ts
import AcUnitIcon from "@mui/icons-material/AcUnit";
```

### Import Paths (CRITICAL)

**ALWAYS** import ELEKS UI components from the `@eleks-ui/components` alias:

```ts
// ✅ CORRECT - Always use this pattern
import { Button, TextField, Alert } from "@eleks-ui/components";
```

**NEVER use** any of these patterns:

```ts
// ❌ WRONG - Relative paths
import { Button } from "./components/Button";
import { Button } from "../components/core/Button";
import { Button } from "../../eleks-ui/components/Button";

// ❌ WRONG - MUI direct imports
import { Button } from "@mui/material";
import { Button } from "@mui/material/Button";
import { Button } from "@material-ui/core";

// ❌ WRONG - Other third-party UI libraries
import { Button } from "antd";
import { Button } from "react-bootstrap";
```

**This is non-negotiable.** All ELEKS UI components MUST be imported from `@eleks-ui/components`.

## Available Resources

### Components Documentation

**Component Categories:**

1. **Core Components** (`eleks-ui/components/core/`) - Standard UI components (Button, TextField, Alert, etc.)
2. **Custom Components** (`eleks-ui/components/custom/`) - Specialized components (EmptyState, FileUpload, Heading, TransferList)
3. **X-Components** (`eleks-ui/components/x-components/`) - Advanced components (DataGrid, Charts, DateTime pickers, TreeView)

## Code Generation Rules

### 1. Component Usage

**✅ DO:**

- Always check if a component exists in ELEKS UI before suggesting alternatives
- Consult the eleks-ui MCP server for the relevant documentation
- Use the correct import paths with aliases
- Follow the examples in component documentation

**❌ DON'T:**

- Use components from other libraries without explicit user permission
- Invent components that don't exist in ELEKS UI
- Modify core library files

### 2. Styling

**✅ DO:**

- Use the `sx` prop for component-level styling (Material-UI's system)
- Use the theme system when available
- Follow the existing styling patterns in the codebase

**Example:**

```typescript
<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
```

### 3. Component Props

**✅ DO:**

- Reference the component's eleks-ui MCP documentation for available props
- Use TypeScript types provided by ELEKS UI
- Follow the prop conventions shown in documentation

**Example workflow:**

1. User requests: "Add a button"
2. Call eleks-ui MCP to check for `Button` component
3. Use correct props: `variant`, `color`, `size`, etc.

## Documentation Lookup Priority

When generating code:

1. Check if the component exists in ELEKS UI
2. Read the eleks-ui MCP documentation for that component
3. Follow the examples and prop definitions
4. Generate code using correct imports and patterns

### When the user provides a Figma link

1. Call MCP tool \`get_figma_data\` with the Figma file key (and optional node ID from the URL).
2. Get component documentation by component set IDs or names: use \`get_component_docs_batch\` with \`componentSetIds\` (e.g. "start:end" from the response), or read \`eleks-ui:/components-docs/{identifier}\`.
3. If the design has images or icons, use \`download_figma_images\` to save assets to the project.
4. Implement the UI using the gathered docs and assets.

Use MCP \`search_components\` when the user describes a feature (e.g. file upload, modal, date picker) to find the right ELEKS UI components; then fetch full docs via \`get_component_docs_batch\` or \`eleks-ui:/components-docs/{name}\`.

## Example Workflow

**User Request:** "Create a login form with email and password fields"

**Agent Process:**

1. Check for `TextField` in core components ✓
2. Check for email/password icons @mui/icons-material ✓
3. Check for `Button` in core components ✓
4. Read prop documentation from eleks-ui MCP server
5. Generate code using `@eleks-ui/components`

## Error Prevention

**Common Mistakes to Avoid:**

- ❌ **Using relative import paths** (e.g., `./components/Button`, `../core/TextField`)
- ❌ Using `@mui/material` or `@material-ui/core` imports
- ❌ Suggesting components not in ELEKS UI
- ❌ Inventing prop names not in documentation
- ❌ Using external UI libraries without permission
- ❌ Creating custom components when ELEKS UI alternatives exist

**Remember:** The ONLY valid import path for ELEKS UI components is `@eleks-ui/components`.

## Summary

**Golden Rules:**

1. **Import Rule:** Always use `import { Component } from '@eleks-ui/components'` - never relative paths or other libraries.
2. **Documentation Rule:** When in doubt, check the eleks-ui MCP documentation first.

If a component or icon doesn't exist in ELEKS UI, inform the user and
await instructions before proceeding with alternatives.

This ensures code consistency, maintainability, and adherence to the project's design system.
