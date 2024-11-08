"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form as ContactForm, FormField, FormItem, FormControl } from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

const formSchema = z.object({
 name: z.string(),
 email: z.string(),
 message: z.string()
})

export default function Form() {
 const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
   name: "",
   email: "",
   message: ""
  }
 })
 
 return (
  <ContactForm {...form}>
   <form
    action="https://public.herotofu.com/v1/c6c2f510-d64f-11ee-afc9-dd7ac292df82"
    method="POST"
    acceptCharset="UTF-8"
    className="space-y-4 max-w-md mx-auto"
   >
    <FormField
     control={form.control}
     name="name"
     render={({ field }) => (
      <FormItem>
       <FormControl>
        <Input placeholder="Name" {...field} />
       </FormControl>
      </FormItem>
     )}
    />
    <FormField
     control={form.control}
     name="email"
     render={({ field }) => (
      <FormItem>
       <FormControl>
        <Input placeholder="Email" {...field} />
       </FormControl>
      </FormItem>
     )}
    />
    <FormField
     control={form.control}
     name="message"
     render={({ field }) => (
      <FormItem>
       <FormControl>
        <Textarea placeholder="Message" {...field} />
       </FormControl>
      </FormItem>
     )}
    />
    <Button type="submit" variant="custom">Submit</Button>
   </form>
  </ContactForm>
 )
}