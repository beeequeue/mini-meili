<script lang="ts">
  type GoodInputProps = Partial<
    Pick<
      HTMLInputElement,
      "value" | "id" | "minLength" | "maxLength" | "autofocus" | "placeholder"
    >
  >

  type Props = {
    type?: "text" | "password" | "email"
    className?: string
  }

  let {
    value = $bindable<string>(""),
    className,
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
  class:px-2={true}
  class={className}
>
  <div class="i-lucide:search mr-1 p-3"></div>

  <input id="search" {...props} class="py-2" bind:value />
</div>
