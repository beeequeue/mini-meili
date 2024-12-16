<script lang="ts">
  type GoodInputProps = Partial<
    Pick<
      HTMLInputElement,
      "value" | "id" | "minLength" | "maxLength" | "autofocus" | "placeholder"
    >
  >

  type Props = {
    icon?: "search" | "key" | "url"
    type?: "text" | "password" | "email"
    className?: string
  }

  let {
    icon,
    className,
    value = $bindable<string>(""),
    ...props
  }: Props & GoodInputProps = $props()
</script>

<div
  class:flex={true}
  class:items-center={true}
  class:b-b-solid={true}
  class:b-b-2={true}
  class:b-red-4={true}
  class:bg-#151515={true}
  class:p-2={true}
  class={className}
>
  {#if icon != null}
    <div
      class="ml-0.5 mr-2 p-2.5"
      class:i-lucide:search={icon === "search"}
      class:i-lucide:key-round={icon === "key"}
      class:i-lucide:globe={icon === "url"}
    ></div>
  {/if}

  <input id="search" {...props} class="w-full p-0" bind:value />
</div>
