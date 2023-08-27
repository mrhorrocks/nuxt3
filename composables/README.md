## Composables

> Files in this folder are auto imported.

```
# Generates `composables/foo.ts`
npx nuxi add composable foo
```

Example:

```
usePrintString.ts
```

How to use:

```
<script setup lang="ts">
    // See ~/composables folder for available compaosables
    const printString = usePrintString();
</script>

<template>
    <div>
        <p>{{ printString }}</p>
        <!-- ~/composables/usePrintString.ts was activated -->
    </div>
</template>
```

