<script lang="ts">
  type GoodInputProps = Partial<
    Pick<
      HTMLInputElement,
      "value" | "id" | "minLength" | "maxLength" | "autofocus" | "placeholder"
    >
  >

  type Props = {
    type?: "text" | "password" | "email"
    class?: string
  }

  let { value = $bindable<string>(""), ...props } = $props<Props & GoodInputProps>()
</script>

<input
  id="search"
  class:b-solid={true}
  class:b-b-2={true}
  class:b-red-4={true}
  class:bg-#151515={true}
  class:px-3={true}
  class:py-2={true}
  {...props}
  bind:value
/>
