"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { serviceOptions } from "../types";
import { ServiceType } from "../types";

interface ServiceSelectStageProps {
  onSelect: (service: ServiceType) => void;
  onBack: () => void;
}

export function ServiceSelectStage({ onSelect, onBack }: ServiceSelectStageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-6 py-8"
    >
      <div className="w-full max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-2 text-center font-montserrat text-2xl font-bold text-foreground md:text-3xl"
        >
          What are you looking for?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-8 text-center text-muted-foreground"
        >
          Select the service you need help with
        </motion.p>

        <div className="grid gap-4 md:grid-cols-3">
          {serviceOptions.map((option, index) => (
            <motion.div
              key={option.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card
                className="cursor-pointer border-2 border-transparent transition-all hover:border-brand-primary/50 hover:shadow-lg active:scale-95"
                onClick={() => onSelect(option.value as ServiceType)}
              >
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <span className="mb-3 text-4xl">{option.icon}</span>
                  <span className="font-montserrat font-semibold text-foreground">
                    {option.label}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <Button variant="ghost" onClick={onBack} className="text-muted-foreground">
            Back
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
