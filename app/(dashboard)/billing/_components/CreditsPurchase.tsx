"use client"

import { PurchaseCredits } from "@/actions/billing/PurchaseCredits";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditsPack, PackId } from "@/types/billing";
import { useMutation } from "@tanstack/react-query";
import { CoinsIcon, CreditCard } from "lucide-react";
import { useState } from "react";
import { Label } from "recharts";
import { toast } from "sonner";

export default function CreditsPurchase() {
    const [selectedPack, setSelectedPack] = useState(PackId.MEDIUM);

    const mutation = useMutation({
        mutationFn: PurchaseCredits,
        onSuccess: () => {
            toast.success("Credits purchased successfully", { id: selectedPack });
        },
        onError: () => {
            toast.error("Purchase failed", { id: selectedPack });
        }
    })
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
           
            <CoinsIcon className="h-6 w-6 text-primary" />
            Purchase Credits
          </CardTitle>
          <CardDescription>
            Select the number of credits you want to purchase
          </CardDescription>
        </CardHeader>
        <CardContent>
            <RadioGroup onValueChange={(value) => setSelectedPack(value as PackId)}
                value={selectedPack}
                >
          {CreditsPack.map((pack) => (
            <div 
            key={pack.id}
            className="flex items-center space-x-3 bg-secondary/50 rounded-lg p-3 hover:bg-secondary"
            onClick={() => setSelectedPack(pack.id)}
            >
                <RadioGroupItem value={pack.id} id={pack.id} />
                <Label>
                 <span>
                 {pack.name} - {pack.label}
                 </span>
                 <span>$ {(pack.price / 100 ).toFixed(2)}</span>
                </Label>
                </div>
          ))}
          </RadioGroup>
        </CardContent>
        <CardFooter>
            <Button className="w-full" disabled={mutation.isPending}
            onClick={() => {
                mutation.mutate(selectedPack);
            }}
            >
                <CreditCard className="mr-2 h-5 w-5" />
                Purchase Credits
            </Button>
        </CardFooter>
      </Card>
    );
  }
  