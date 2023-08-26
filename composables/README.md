## Composables

> Files in this folder are auto imported.

> Naming conventions apply and must be prefixed with 'use'. See example

Example:

```
usePrintString.ts
```

How to use in a template:

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

