<script lang="ts">
  type GoodInputProps = Partial<
    Pick<HTMLInputElement, "value" | "id" | "minLength" | "maxLength" | "autofocus">
  >

  type Props = {
    type?: "text" | "password" | "email"
    class?: string
  }

  let { value = $bindable<string>(""), ...props } = $props<Props & GoodInputProps>()
</script>

<input
  id="search"
  class="b-solid b-b-2 b-amber bg-#151515 px-3 py-2"
  {...props}
  bind:value
/>
